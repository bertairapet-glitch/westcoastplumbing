import { GoogleGenerativeAI } from "@google/generative-ai";
import { ChatMessage } from "../types";

export class GeminiService {
  private ai: any;
  private model: any;
  private initializationError: string | null = null;
  private apiKeyStatus: string = "";

  constructor() {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";
    this.apiKeyStatus = apiKey ? `Present (${apiKey.substring(0, 4)}...)` : "Missing/Empty";
    console.log(`🔑 DEBUG: API Key Status: ${this.apiKeyStatus}`);
    console.log(`🔑 DEBUG: Full API Key: ${apiKey}`);

    const isPlaceholder = apiKey === "PLACEHOLDER_API_KEY" || !apiKey;
    console.log(`🔑 DEBUG: Is Placeholder: ${isPlaceholder}`);

    if (!isPlaceholder) {
      try {
        this.ai = new GoogleGenerativeAI(apiKey);
        this.model = this.ai.getGenerativeModel({
          model: "gemini-2.0-flash-exp",
          systemInstruction: `
            You are a professional, super-intelligent plumbing assistant for "West Coast Plumbing" in Burbank, CA.
            - Help customers identify plumbing issues clearly.
            - Ask follow-up questions to understand the problem fully.
            - If it sounds dangerous (gas leak, flooding), tell them to call (714) 267-9974 immediately.
            - Avoid DIY instructions that could cause damage; focus on diagnosis and recommendations.
            - Be friendly, professional, and highly informative.
          `,
        });
        console.log("✅ WestCoast AI (Gemini) initialized successfully");
      } catch (error: any) {
        console.error("❌ Failed to initialize Gemini API:", error);
        this.initializationError = `Init Failed: ${error.message}`;
      }
    } else {
      console.warn("⚠️ No valid Gemini API key detected (using local intelligence mode)");
      this.initializationError = "No API Key found in env";
    }
  }

  async diagnoseProblem(history: ChatMessage[]): Promise<string> {
    // 1️⃣ Priority: Use live Gemini API if available
    if (this.model) {
      try {
        // Format history for Gemini SDK
        const formattedHistory = history.slice(0, -1).map((h) => ({
          role: h.role === "user" ? "user" : "model",
          parts: [{ text: h.content }],
        }));

        // Gemini requires the first message in history (if any) to be from the user.
        // If our internal history starts with an assistant greeting, we must exclude it.
        const validHistory = formattedHistory.filter((msg, index) => {
          if (index === 0 && msg.role === 'model') return false;
          return true;
        });

        const chat = this.model.startChat({
          history: validHistory,
        });

        const lastMessage = history[history.length - 1].content;
        const result = await chat.sendMessage(lastMessage);
        const response = await result.response;
        return response.text();
      } catch (error: any) {
        console.error("❌ Gemini API call failed:", error);

        // Check if it's a quota exceeded error
        if (error.message && error.message.includes("429") || error.message.includes("quota")) {
          console.log("⚠️ API quota exceeded, falling back to intelligent responses");
          return this.getIntelligentFallback(history);
        }

        let availableModels = "Could not fetch models";
        try {
          const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";
          const listReq = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
          const data = await listReq.json();
          if (data.models) {
            availableModels = data.models.map((m: any) => m.name.replace('models/', '')).join(', ');
          } else if (data.error) {
            availableModels = `API Error: ${data.error.message}`;
          }
        } catch (e) {
          availableModels = "Fetch failed";
        }

        return `⚠️ DEBUG ERROR: API Call Failed. \nKey Status: ${this.apiKeyStatus}\nError: ${error.message}\n\nAvailable Models: ${availableModels}`;
      }
    } else {
      // Model not initialized
      if (this.initializationError) {
        return `⚠️ DEBUG ERROR: AI Not Initialized. \nKey Status: ${this.apiKeyStatus}\nReason: ${this.initializationError}`;
      }
      return `⚠️ DEBUG ERROR: Model is null but no error recorded. Key Status: ${this.apiKeyStatus}`;
    }

    // 2️⃣ Fallback: Use local keyword-based "intelligence"
    // return this.getIntelligentFallback(history);
  }

  /**
   * Provides a helpful response by analyzing the conversation context
   * even when the Gemini API is unavailable.
   */
  private getIntelligentFallback(history: ChatMessage[]): string {
    const lastUserMessage = history.filter(msg => msg.role === 'user').pop()?.content.toLowerCase() || '';

    // Emergency scenarios
    if (lastUserMessage.includes('gas') || lastUserMessage.includes('smell') || (lastUserMessage.includes('leak') && lastUserMessage.includes('flood'))) {
      return "Safety first! If you suspect a gas leak or are experiencing major flooding, please leave the area immediately and call our emergency line at (714) 267-9974. We have technicians available 24/7 for critical situations.";
    }

    // Keyword detection
    if (lastUserMessage.includes('leak') || lastUserMessage.includes('drip')) {
      return "Leaks can waste significant water and cause hidden damage. Could you tell me where you're seeing the water? Is it from a faucet, under a sink, or perhaps from the ceiling? Knowing the location helps us prioritize your case.";
    }

    if (lastUserMessage.includes('clog') || lastUserMessage.includes('backup') || lastUserMessage.includes('slow')) {
      return "A backup or slow drain can be frustrating. Is this affecting just one fixture (like a sink or toilet) or multiple drains throughout the house? This helps us determine if it's a local clog or a main line issue.";
    }

    if (lastUserMessage.includes('hot water') || lastUserMessage.includes('heater') || lastUserMessage.includes('cold')) {
      return "Water heater issues are very common. Are you getting any hot water at all, or is it completely cold? Also, do you see any water pooling around the heater itself? This information is vital for our technicians.";
    }

    if (lastUserMessage.includes('toilet') || lastUserMessage.includes('flush')) {
      return "Toilet issues should be handled quickly to maintain sanitation. Is it overflowed, won't flush, or perhaps it's constantly running? We can certainly help get that back in working order.";
    }

    // Basic greeting/fallback
    if (history.length <= 2) {
      return "Hello! I'm the WestCoast AI assistant. It sounds like you might have a plumbing concern. Could you describe exactly what you're noticing? For example, water where it shouldn't be, unusual sounds, or a loss of water pressure?";
    }

    return "Thank you for that information! Based on what you've described, a professional inspection by one of our West Coast Plumbing technicians would be the best next step. They can diagnose the root cause accurately. Would you like our phone number or shall I help you with anything else?";
  }
}

// Singleton instance
export const geminiService = new GeminiService();

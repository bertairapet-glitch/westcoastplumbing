import { ChatMessage } from "../types";

export class GeminiService {
  async diagnoseProblem(history: ChatMessage[]): Promise<string> {
    const lastMessage = history[history.length - 1]?.content;

    const response = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: lastMessage,
        history,
      }),
    });

    if (!response.ok) {
      throw new Error("AI service failed");
    }

    const data = await response.json();
    return data.text;
  }
}

export const geminiService = new GeminiService();


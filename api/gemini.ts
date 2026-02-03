import OpenAI from 'openai';

export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { history } = req.body;

    if (!history || !Array.isArray(history)) {
        return res.status(400).json({ error: 'Invalid request body' });
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'API key not configured' });
    }

    try {
        const openai = new OpenAI({
            apiKey: apiKey,
        });

        // Format messages for OpenAI
        const formattedMessages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
            {
                role: 'system',
                content: `You are a professional, super-intelligent plumbing assistant for "West Coast Plumbing" in Burbank, CA.
        - Help customers identify plumbing issues clearly.
        - Ask follow-up questions to understand the problem fully.
        - If it sounds dangerous (gas leak, flooding), tell them to call (714) 267-9974 immediately.
        - Avoid DIY instructions that could cause damage; focus on diagnosis and recommendations.
        - Be friendly, professional, and highly informative.`
            },
            ...history.map((msg: any) => ({
                role: msg.role === 'user' ? 'user' as const : 'assistant' as const,
                content: msg.content
            }))
        ];

        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: formattedMessages,
            max_tokens: 500,
            temperature: 0.7,
        });

        const response = completion.choices[0]?.message?.content || 'Sorry, I couldn\'t generate a response.';
        res.status(200).json({ response });
    } catch (error: any) {
        console.error("❌ OpenAI API call failed:", error);
        res.status(500).json({ error: 'Failed to get response from OpenAI' });
    }
}

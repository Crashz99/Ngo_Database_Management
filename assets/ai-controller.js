// ai-controller.js
// Used by dashboard.html for per-record deductions (the "AI Deduction" button on individual cards)
 
export async function fetchAIDeduction(record, existingNotes) {
    const model = "phi3:medium";    
 
    const prompt = `You are a military signals intelligence analyst.
Analyse this single operational log entry and provide a concise tactical deduction.
Rules:
- No greeting or preamble. Start immediately with the deduction.
- Cite the record ID in your response.
- Maximum 4 sentences.  
- Clinical tone only.
 
Record ID: ${record.id}
Form Type: ${record.formType}
Timestamp: ${record.timestamp}
Payload: ${JSON.stringify(record.payload, null, 2)}
${existingNotes ? 'Existing Notes: ' + existingNotes : ''}`;
 
    try {
        const response = await fetch('http://localhost:11434/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ model: model, prompt: prompt, stream: false })
        });
        const data = await response.json();
        return data.response || null;
    } catch (err) {
        console.error("AI Controller Error:", err);
        return null;
    }
}
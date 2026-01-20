import emailjs from 'emailjs-com';

export class EmailService {
    static async sendBookingEmail(form: HTMLFormElement): Promise<boolean> {
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            // Initialize EmailJS with the public key
            emailjs.init(publicKey);

            const formData = new FormData(form);
            const templateParams = {
                name: formData.get('name'),
                phone: formData.get('phone'),
                service: formData.get('service'),
                description: formData.get('description'),
                // Derived fields if needed by the template
                subject_line: `Booking Request: ${formData.get('service')} from ${formData.get('name')}`
            };

            console.log('📧 EmailJS config:', { serviceId, templateId, publicKey: publicKey ? '***' + publicKey.slice(-4) : 'undefined' });
            console.log('📧 Sending email via EmailJS send()...', templateParams);

            const result = await emailjs.send(serviceId, templateId, templateParams);

            console.log('📧 EmailJS response:', result.status, result.text);

            return result.status === 200;
        } catch (error) {
            console.error('❌ Failed to send email via EmailJS:', error);
            return false;
        }
    }
}

export type ContactFormData = {
    fullName: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
    attachment: File | null; 
};
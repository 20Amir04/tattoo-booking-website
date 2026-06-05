import { API_BASE_URL } from "./api";
import type { ContactFormData } from "../types/contact";

export async function submitContactRequest(
    formData: ContactFormData
): Promise<void> {
    const payload = new FormData();

    payload.append("fullName", formData.fullName);
    payload.append("phone", formData.phone);
    payload.append("email", formData.email);
    payload.append("subject", formData.subject);
    payload.append("message", formData.message);

    if (formData.attachment) {
        payload.append("attachment", formData.attachment);
    }

    const response = await fetch(`${API_BASE_URL}/ContactRequest`, {
        method: "POST",
        body:payload,
    });

    if (!response.ok)
    {
        throw new Error("Failed to submit contact request.");
    }
}
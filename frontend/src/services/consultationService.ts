import { API_BASE_URL } from "./api";
import type { ConsultationFormData } from "../types/consultation";

export async function submitConsultationRequest(
    formData: ConsultationFormData
): Promise<void> {
    const payload = new FormData();

    payload.append("fullName", formData.fullName);
    payload.append("phone", formData.phone);
    payload.append("email", formData.email);
    payload.append("idea", formData.idea);

    if (formData.referenceFile) {
        payload.append("referenceFile", formData.referenceFile);
    }

    const response = await fetch(`${API_BASE_URL}/ConsultationRequest`, {
        method: "POST",
        body: payload,
    });

    if (!response.ok) {
        throw new Error("Failed to submit consultation request.");
    }
}
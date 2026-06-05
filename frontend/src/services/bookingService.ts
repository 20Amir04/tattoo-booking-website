import { API_BASE_URL } from "./api";
import type { BookingFormData } from "../types/booking";

export async function SubmitBookingRequest(formData:BookingFormData): Promise<void> {
    const payload = new FormData();

    payload.append("FirstName", formData.firstName);
    payload.append("LastName", formData.lastName);
    payload.append("Email", formData.email);
    payload.append("Phone", formData.phone);
    payload.append("IsCoverUp", formData.isCoverUp);
    payload.append("Instagram", formData.instagram);
    payload.append("Description", formData.description);
    payload.append("Comments", formData.comments);

    formData.preferredTime.forEach((time) => {
        payload.append("PreferredTime", time)
    });

    formData.preferredDays.forEach((day) => {
        payload.append("PreferredDays", day);
    });

    formData.referencePhotos.forEach((file) => {
        payload.append("ReferencePhotos", file)
    });

    const response = await fetch(`${API_BASE_URL}/BookingRequest`, {
        method: "POST",
        body: payload,
    });

    if (!response.ok) {
        throw new Error("Failed to submit booking request.");
    }
}
export type BookingFormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    isCoverUp: "yes" | "no" | "";
    instagram: string;
    description: string;
    preferredTime: string[];
    preferredDays: string[];
    comments: string;
    referencePhotos: File[];
};
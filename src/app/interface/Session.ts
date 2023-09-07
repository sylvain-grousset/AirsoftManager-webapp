import { Time } from "@angular/common";

export interface Session {
    sessionId: number;
    sessionDate: Date;
    heureDebut: Time;
    heureFin: Time;
    maxParticipants: number;
    description: Text;
}
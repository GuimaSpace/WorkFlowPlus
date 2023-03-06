export interface UserRole {
    administrator?: boolean;
    senior?: boolean;
    worker?: boolean;
    guest?: boolean;
}

export interface UserInterface {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    image: string;
    features: {
        role: UserRole;
    };
}

export interface ServiceInterface{
    id: string;
    title: string;
    description: string;
    place: string;
    created_date: Date;
    requester: string;
    priority:[1,2,3,4,5];
    status:[1,2,3];
}
//* Modelo de datos

/**
 * Modelo para pilotos
 */
export interface Driver {
    name: string;
    nationality: string;
    dateOfBirth: Date;
    championshipsWon: number;
};

/**
 * Modelo para el auto
 */
export interface Car {
    model: string;
    engine: string;
    chassis: string;
    topSpeed: number;
}

/**
 * Modelo para el equipo
 */
export interface Team {
    name: string;
    base: string;
    teamPrincipal:string;
    drivers:Driver[];
    car: Car;
    championshipsWon: number;
    description: string;
    founded:Date;
    img:string;
};

export interface Teams {
    id:number;
    team:Team;
};
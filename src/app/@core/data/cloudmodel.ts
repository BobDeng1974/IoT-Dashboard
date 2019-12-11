import { IMqttServiceOptions } from 'ngx-mqtt';

export interface Cloud{
    id?: string;
    URL: string;
    username: string;
    port: number;
    password: any;
}

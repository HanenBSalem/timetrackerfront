import http from "@/http-common";
class TimeDataService {
    getAll(): Promise<any> {
        return http.get("/");
    }

    create(data: any): Promise<any> {
        return http.post("/", data);
    }
}
export default new EimeDataService();
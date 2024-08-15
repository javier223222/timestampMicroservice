import ResponseType from "../types/ResponseType";
import ErrorType from "../types/ErrorType";
export default class DataService{
    public  async proccess(date:string): Promise<ResponseType|ErrorType> {
        try{
            const regex = /^\d+$/;
            let response:ResponseType;

            if(regex.test(date)){
                const dateInt = parseInt(date);
                const dateObj = new Date(dateInt);
                response = {
                    unix: dateInt,
                    utc: dateObj.toUTCString()
                }
                return response;
                
            }
            const dateObj = new Date(date);
            response={
                unix: dateObj.getTime(),
                utc: dateObj.toUTCString()
            }
            return response;
            
        }catch(e){
            return {
                error: "Invalid Date"
            }

        }
        
    }
}
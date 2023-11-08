import { Test } from "@nestjs/testing";
import { AdminService } from "./admin.service";
import { ExampleClass } from "./ExampleClass.service";

jest.mock("./ExampleClass.service")

describe("Addition test", ()=>{
    let adminService: AdminService;

    beforeEach(async()=>{
        const app= await Test.createTestingModule({
            providers: [
                AdminService
            ],
        }).compile();    
        adminService = app.get<AdminService>(AdminService);
    })
 
    it("should use mock add and result should be 200", async()=>{
        const mockResult = 200;
        jest.spyOn(ExampleClass.prototype, 'add').mockResolvedValueOnce(mockResult);
    
        const result = await adminService.getAddition();
    
        expect(result).toBe(mockResult);

        // let instance = new ExampleClass();
        // jest.spyOn(instance, "add").mockResolvedValue(200);

        // // Act
        // let res= await adminService.getAddition();
        // console.log("result: "+res)

        // expect(instance).toBeCalled()
        
    })
})
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { SkillsSdaService } from "../../../services/skillsSdaService.service"
import { TestBed } from "@angular/core/testing"
import { SdaServiceService } from "../../../services/sda-service.service"

describe('SkillsSda',()=> {
    let service: SkillsSdaService
    let sdaServiceService: SdaServiceService
    let httpMock: HttpTestingController

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule],
            providers:[SdaServiceService, SkillsSdaService],
        });
        service = TestBed.inject(SkillsSdaService);
        sdaServiceService = TestBed.inject(SdaServiceService);
        httpMock = TestBed.inject(HttpTestingController);
    });
    afterEach(() => {
        httpMock.verify();
      });
    
      it('should be created', () => {
        expect(service).toBeTruthy();
      });
      it('should create new skillSda', () => {
        const newSkillSda = {
          id_skills: 'test',
          id_sda: 'test',
          check: 0,
        };
        service.postSkillSda(newSkillSda).subscribe((response) => {
          expect(response).toEqual(newSkillSda);
        });
        const req = httpMock.expectOne(`${service['url']}createSkillsSda/`);
        expect(req.request.method).toBe('POST');
        req.flush(newSkillSda);
      });
 });

import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../service/search.service';
import { Title } from '@angular/platform-browser';
import { TitleConstant } from '../../constant/title.constant';
import { UtilCommonService } from '../../service/util-common.service';
import { ActivatedRoute } from '@angular/router';
import { StatusResponseModel } from '../../model/status-response.model';
import { DetailsModel } from '../../model/details.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [SearchService, Title, UtilCommonService]
})
export class DetailsComponent implements OnInit {

  public texto: string;
  public details: DetailsModel;
  public mensajeResulBusqueda: any = {};
  public objSubmit: any = {isLoading: false, error: false};

  constructor(private route: ActivatedRoute,
                      private searchService: SearchService,
                      private titleService: Title,
                      private utilService: UtilCommonService) { }

  ngOnInit() {
    this.texto = this.utilService.clearTextSearch(this.route.snapshot.paramMap.get('username'));

    console.log("1 ->", this.texto);

    this.titleService.setTitle(TitleConstant.DETAILS + this.texto);

    this.loadDetails();
  }

  /**
   * Load details by text search
   *
   * @returns void
   */
  loadDetails(): void {

    if (this.texto !== "") {

      this.objSubmit = {isLoading : true};

      this.searchService.getDetailsUser(this.texto).subscribe(
        (resp) => {
          this.details = resp;
        },
        (error: StatusResponseModel) => {

          if (error.estado === 404) {
            this.objSubmit.error = true;
          }
          else {
            this.mensajeResulBusqueda = { tipo: 'E', mensaje: error.mensaje };
          }
        }
      )
      .add(() => {
        this.objSubmit.isLoading = false;
      });
    }
  }
}

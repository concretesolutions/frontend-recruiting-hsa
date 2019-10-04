import { Component, OnInit, Input } from '@angular/core';
import { DetailsModel } from '../../model/details.model';
import { SearchService } from '../../service/search.service';
import { StatusResponseModel } from '../../model/status-response.model';
import { RepositoryModel } from '../../model/repository.model';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css'],
  providers: [SearchService]
})
export class RepoDetailsComponent implements OnInit {

  @Input() details: DetailsModel;
  public repository: RepositoryModel[] = [];
  public mensajeResulBusqueda: any = {};
  public objSubmit: any = {isLoading: true};

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.loadRepo();
  }

  /**
   * Load repository by login user
   *
   * @returns void
   */
  loadRepo(): void {

    this.searchService.getRepoUser(this.details.login).subscribe(
      (resp) => {
        if (resp) {
          resp.sort((val1, val2)=> {return val2.stargazers_count - val1.stargazers_count})
        }
        this.repository = resp;
      },
      (error: StatusResponseModel) => {
        this.mensajeResulBusqueda = { tipo: 'E', mensaje: error.mensaje };
      }
    )
    .add(() => {
      this.objSubmit.isLoading = false;
    });
  }
}

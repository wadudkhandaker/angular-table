import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ListService } from './services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnDestroy {
  subscription: Subscription;
  categories:  string[];
  searchText = '';
  
  constructor(private listService: ListService) {
    this.categories = [];
    this.subscription = this.listService.getCategories().pipe().subscribe((categories: string[]) => {
      this.categories = categories;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}


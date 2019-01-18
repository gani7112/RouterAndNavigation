import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { timer } from "rxjs";


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: any[] = [];
  refresh = 0;
  contactSubscription;
  timerSubscription


  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.refreshData();
  }

  subscribeToData(): void {
    this.timerSubscription = timer(1000).subscribe(() => this.refreshData());
  }

  refreshData(): void {
    this.contactSubscription = this.contactService.getContacts().subscribe((data: any[]) => {
      console.log(data)
      this.refresh++;
      
      if(data)
      {
      this.contacts = data;
      this.contactSubscription.unsubscribe();
      if(this.timerSubscription)
      this.timerSubscription.unsubscribe();
      }
      else{
        this.subscribeToData();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
    if (this.contactSubscription) {
      this.contactSubscription.unsubscribe();
    }
  }
}

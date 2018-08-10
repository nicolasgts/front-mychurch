import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../services/storage.service';
import { UserDTO } from '../../../models/user.dto';
import { UserService } from '../../../services/domain/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: UserDTO;

  constructor(public storage: StorageService, public userService: UserService) { }

  ngOnInit() {

    let localUser = this.storage.getLocalUser();
    console.dir(localUser);
    if (localUser && localUser.email) {
      
      this.userService.findByEmail(String(localUser.email))
        .subscribe(response => {
          this.user = response;
          console.log("AQUIIII");
        },
        error => {}); 
    }
  }

}

import { Component, ViewChild } from '@angular/core';
import { SessionNbrParticipant } from '../interface/SessionNbrParticipant';
import { ApiService } from '../service/api-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(private apiService: ApiService){}

  @ViewChild('map')mapElement:any;

  lesSessions: SessionNbrParticipant[] = [];

  ngOnInit(): void {
      this.apiService.getAllSessions().subscribe(res => {
        this.lesSessions = res;
        console.log(res);
      })
  }

  ngAfterViewInit(): void{

    var mapOptions = {
      center: new google.maps.LatLng(44.88875778844754, 4.890424205281809),
      zoom: 15,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
   };

   
    var map = new google.maps.Map(this.mapElement.nativeElement, {
      mapTypeControlOptions: {
        mapTypeIds: ['cleanMap']
      },
      center: new google.maps.LatLng(44.88875778844754, 4.890424205281809),
      zoom: 13,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        }
      ]
    });

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(44.88875778844754, 4.890424205281809),
      map,
     })
  }

}

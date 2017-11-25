import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {

	private cities : Array<string> = ['Istanbul', 'Berlin', 'London', 'Helsinki', 'Dublin', 'Vancouver'];
	public data: any = [];

	constructor(private weatherService: WeatherService, private route: ActivatedRoute) { 
		let woeid = this.route.snapshot.paramMap.get('woeid');
		this.weatherService.getLocationData({command: 'location', woeid: woeid}).subscribe((location) => {
			this.data.push(location);
		});
	}

	ngOnInit() {
	}

}

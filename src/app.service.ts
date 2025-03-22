import { Injectable } from '@nestjs/common';

interface DamagedSystem {
	system: string;
	code: string;
}

@Injectable()
export class AppService {
	private damaged_systems: DamagedSystem[] = [
		{ system: 'navigation', code: 'NAV-01' },
		{ system: 'communications', code: 'COM-02' },
		{ system: 'life_support', code: 'LIFE-03' },
		{ system: 'engines', code: 'ENG-04' },
		{ system: 'deflector_shield', code: 'SHLD-05' },
	];

	private selected = {} as DamagedSystem;

	getStatus() {
		const selectedSystem =
			this.damaged_systems[
				Math.floor(
					Math.random() * Object.keys(this.damaged_systems).length
				)
			];
		this.selected = selectedSystem;
		return {
			damaged_system: selectedSystem.system,
		};
	}

	repairBay() {
		return {
			systemCode: this.selected.code,
		};
	}
}

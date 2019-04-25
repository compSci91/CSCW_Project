import {Module} from './module';


export class Course {
	course_id: number;
	name: string;
  modules: Module[]=[];
}

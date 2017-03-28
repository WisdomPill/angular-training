/**
 * Created by anas on 28/03/17.
 */
import {Injectable} from "@angular/core";

const FAKE_DATA = [
  {
    id: 1,
    image: "https://www.google.com/logos/2011/freddie11_static-hp.jpg",
    title: "freddie-mercurys-65th-birthday"
  },
  {
    id: 2,
    image: "https://www.google.com/logos/2013/ella_fitzgeralds_96th_birthday-1212009-hp.jpg",
    title: "ella-fitzgeralds-96th-birthday"
  },
  {
    id: 3,
    image: "https://lh3.googleusercontent.com/QzUESvvBkvtLLKCn890itaxo2UNMN2BQAHThDC_F9zsfChYb7Md7aMxHesfA2RgmEwj3TuMNa-hGfXyupAVpA_Ql2fQf41DTI7LWU-jH",
    title: "teachers-day-2017-czech-republic-slovakia"
  }
];

@Injectable()
export class PostService {
  private data: Array<any> = FAKE_DATA;

  public getById(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      for (let index in this.data) {
        let post = this.data[index];
        if (post.id == id) {
          resolve(post);
        }
      }
      reject("post not found");
    });
  }

  public getAll(): Promise<Array<any>> {
    return new Promise((resolve, reject) => {
      resolve(this.data);
    });
  }
}

import { randomUUID } from 'node:crypto';

import { Replace } from '../../helpers/Replace';

import { Content } from './content';


export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}


export class Notification  {
  
  //Isso seria os atributos, porém usa as props do typescript.
  private _id: string;
  private props: NotificationProps;  


  constructor(props: Replace<NotificationProps, { createdAt: Date }>, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
    };
    //this.content = '';  
    //this.category = '';
  }


  //Getter and Setter
  public set id(id: string) {
    this._id = id;
  }

  public get id(): string {
    return this._id;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }
        
  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  public read() {
    this.props.readAt = new Date();
  }

  public unread() {
    this.props.readAt = null;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public cancel() {
    this.props.canceledAt = new Date();
  }

  public get canceledAt(): Date | null | undefined {
    return this.props.canceledAt;
  }

  //public set createdAt(createdAt: Date) {
    //this.props.createdAt = createdAt;
  //}

  public get createdAt(): Date {
    return this.props.createdAt;
  }

}


export interface dataaa {
    _id?: {
      timestamp: Date;
      date: string;
    } 
    messageId?: string
    messages?:{
        message:string,
        from:string,
        to:string,
        time:string
    }
    matchedDate?: string
  }
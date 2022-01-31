class ajaxPost {
    constructor(url, dataType, restType, contentType, bearerToken, payloadData) {
      this.url = null;
      this.dataType = 'json';
      this.restType = 'GET';
      this.contentType = 'application/json';
      this.bearerToken = null;
      this.payloadData = null;
    }
  
    // new class stuff above here
  
    processPayload() {
        if(this.url !== null) {
            console.log('Canvas already created!');
            return;
        } 
        else {
            console.log("You can't make a request without necessary fields");
        }
          
    }
  
    createReportList() {
      if(this.listId !== null) {
        console.log('Report list already created!');
        return;
      } else {
        let list = document.createElement('ul');
        list.id = this.id + '-reporter';
  
        let canvasWrapper = document.getElementById(this.id);
        canvasWrapper.appendChild(list);
  
        this.listId = list.id;
      }
    }
  }
  
  export { ajaxPost };
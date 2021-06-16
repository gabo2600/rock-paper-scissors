import React from "react";
import '../css/footer.css';
import Rules from "./modal_rules";

class Footer extends React.Component{
  constructor(){
    super();
    this.state = {
        rulesActive:false
    };

    this.shRules = this.shRules.bind(this);
  }
  
  shRules(){
    this.setState({rulesActive:!this.state.rulesActive});
  }
  
  render(){
    var showRules;
    
    if (this.state.rulesActive === true)
        showRules = <Rules onClick={this.shRules} />
    else
        showRules = '';
    return (
      <div className="footer">
          <button className="bt-shRules" onClick={this.shRules}>
            Rules
          </button>
          {showRules}
      </div>
    );
  }
  
}

export default Footer;


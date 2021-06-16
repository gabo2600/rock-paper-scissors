import React from "react";
import './css/App.css';
//Components
import Footer from "./components/footer";
import Header from "./components/header";
import MainWin from "./components/mainWin";
import Game from "./components/game";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      userPick: -1,
      housePick: -1,
      win:false
    };
    this.Select = this.Select.bind(this);
    this.again = this.again.bind(this);

  }

  Select = async (pick)=> {
    let house = await Math.floor(Math.random() * 3);
    if (house>2)
        house=2;
    await this.setState({ housePick: house });

    let R = 0, P = 1, S = 2;
    let user = pick;
    
    if (user === house)
      this.setState({ win: true });
    else
      if (user === R && house === S)
        this.setState({ win: true });
      else
        if (user === P && house === R)
          this.setState({ win: true });
        else
          if (user === S && house === P)
            this.setState({ win: true });
          else
            this.setState({ win: false });
    if (this.state.win)
      this.setState({ score: this.state.score + 1 });
    this.setState({ userPick: pick }); 

  }

  again() {
    this.setState({ userPick: -1, housePick: -1 });
  }

  render() {
    var main;
    if (this.state.userPick === -1)
      main = <MainWin onClick={this.Select} />;
    else
      main = <Game userPick={this.state.userPick} housePick={this.state.housePick} onClick={this.again} win={this.state.win} />;

    return (
      <div className="App">
        <Header score={this.state.score} />
        {main}
        <Footer />
      </div>
    );
  }

}

export default App;

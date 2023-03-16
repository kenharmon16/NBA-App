import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import * as NBAIcons from "react-nba-logos";
import Header from "./Header/Header";

function chooseTeam() {
  return (
    <>
      <Header />
      <div className="bg-dark">
        <h1 className="text-center text-warning py-5">
          Choose your favorite team
        </h1>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card border-0">
                <Card
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <NBAIcons.ATL />
                  <Card.Body>
                    <Card.Title>Atlanta Hawks</Card.Title>
                    <Button variant="primary">Select this team</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col">
              <div className="card border-0">
                <Card
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <NBAIcons.BOS />
                  <Card.Body>
                    <Card.Title>Boston Celtics</Card.Title>
                    <Button variant="primary">Select this team</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col">
              <div className="card border-0">
                <Card
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <NBAIcons.BKN />
                  <Card.Body>
                    <Card.Title>Brooklyn Nets</Card.Title>
                    <Button variant="primary">Select this team</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col">
              <div className="card border-0">
                <Card
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <NBAIcons.CHA />
                  <Card.Body>
                    <Card.Title>Charlotte Hornets</Card.Title>
                    <Button variant="primary">Select this team</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col">
              <div className="card border-0">
                <Card
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <NBAIcons.CHI />
                  <Card.Body>
                    <Card.Title>Chicago Bulls</Card.Title>
                    <Button variant="primary">Select this team</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="card border-0 my-5">
                <Card
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <NBAIcons.CLE />
                  <Card.Body>
                    <Card.Title>Cleveland Cavaliers</Card.Title>
                    <Button variant="primary">Select this team</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 my-5">
                <Card
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <NBAIcons.DAL />
                  <Card.Body>
                    <Card.Title>Dallas Mavericks</Card.Title>
                    <Button variant="primary">Select this team</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 my-5">
                <Card
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <NBAIcons.DEN />
                  <Card.Body>
                    <Card.Title>Denver Nuggets</Card.Title>
                    <Button variant="primary">Select this team</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 my-5">
                <Card
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <NBAIcons.DET />
                  <Card.Body>
                    <Card.Title>Detroit Pistons</Card.Title>
                    <Button variant="primary">Select this team</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 my-5">
                <Card
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <NBAIcons.GSW />
                  <Card.Body>
                    <Card.Title>Golden State Warriors</Card.Title>
                    <Button variant="primary">Select this team</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="card border-0">
                <Card
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <NBAIcons.HOU />
                  <Card.Body>
                    <Card.Title>Houston Rockets</Card.Title>
                    <Button variant="primary">Select this team</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col">
              <div className="card border-0">
                <Card
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <NBAIcons.IND />
                  <Card.Body>
                    <Card.Title>Indiana Pacers</Card.Title>
                    <Button variant="primary">Select this team</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col">
              <div className="card border-0">
                <Card
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <NBAIcons.LAC />
                  <Card.Body>
                    <Card.Title>Los Angeles Clippers</Card.Title>
                    <Button variant="primary">Select this team</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col">
              <div className="card border-0">
                <Card
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <NBAIcons.LAL />
                  <Card.Body>
                    <Card.Title>Los Angeles Lakers</Card.Title>
                    <Button variant="primary">Select this team</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col">
              <div className="card border-0">
                <Card
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <NBAIcons.MEM />
                  <Card.Body>
                    <Card.Title>Memphis Grizzlies</Card.Title>
                    <Button variant="primary">Select this team</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="card border-0 my-5">
                <Card
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <NBAIcons.MIA />
                  <Card.Body>
                    <Card.Title>Miami Heat</Card.Title>
                    <Button variant="primary">Select this team</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 my-5">
                <Card
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <NBAIcons.MIL />
                  <Card.Body>
                    <Card.Title>Milwaukee Bucks</Card.Title>
                    <Button variant="primary">Select this team</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 my-5">
                <Card
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <NBAIcons.MIN />
                  <Card.Body>
                    <Card.Title>Minnesota Timberwolves</Card.Title>
                    <Button variant="primary">Select this team</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 my-5">
                <Card
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <NBAIcons.NOP />
                  <Card.Body>
                    <Card.Title>New Orleans Pelicans</Card.Title>
                    <Button variant="primary">Select this team</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 my-5">
                <Card
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <NBAIcons.NYK />
                  <Card.Body>
                    <Card.Title>New York Knicks</Card.Title>
                    <Button variant="primary">Select this team</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="card border-0">
                <Card
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <NBAIcons.OKC />
                  <Card.Body>
                    <Card.Title>Oklahoma City Thunder</Card.Title>
                    <Button variant="primary">Select this team</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col">
              <div className="card border-0">
                <Card
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <NBAIcons.ORL />
                  <Card.Body>
                    <Card.Title>Orlando Magic</Card.Title>
                    <Button variant="primary">Select this team</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col">
              <div className="card border-0">
                <Card
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <NBAIcons.PHI />
                  <Card.Body>
                    <Card.Title>Philadelphia 76ers</Card.Title>
                    <Button variant="primary">Select this team</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col">
              <div className="card border-0">
                <Card
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <NBAIcons.PHX />
                  <Card.Body>
                    <Card.Title>Phoenix Suns</Card.Title>
                    <Button variant="primary">Select this team</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col">
              <div className="card border-0">
                <Card
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <NBAIcons.POR />
                  <Card.Body>
                    <Card.Title>Portland Trailblazers</Card.Title>
                    <Button variant="primary">Select this team</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="card border-0 my-5">
                <Card
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <NBAIcons.SAC />
                  <Card.Body>
                    <Card.Title>Sacramento Kings</Card.Title>
                    <Button variant="primary">Select this team</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 my-5">
                <Card
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <NBAIcons.SAS />
                  <Card.Body>
                    <Card.Title>San Antonio Spurs</Card.Title>
                    <Button variant="primary">Select this team</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 my-5">
                <Card
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <NBAIcons.TOR />
                  <Card.Body>
                    <Card.Title>Toronto Raptors</Card.Title>
                    <Button variant="primary">Select this team</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 my-5">
                <Card
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <NBAIcons.UTA />
                  <Card.Body>
                    <Card.Title>Utah Jazz</Card.Title>
                    <Button variant="primary">Select this team</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 my-5">
                <Card
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <NBAIcons.WAS />
                  <Card.Body>
                    <Card.Title>Washington Wizards</Card.Title>
                    <Button variant="primary">Select this team</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default chooseTeam;

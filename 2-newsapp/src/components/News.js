import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: "Mike Henson",
      title: "Moses Swaibu: Match-fixer from Crystal Palace youth team star",
      description:
        "Moses Swaibu was one of the brightest prospects in Crystal Palace's youth ranks, but he ended up in a shady world of cash, danger and fixing rather than football's limelight.",
      url: "http://www.bbc.co.uk/sport/football/articles/cd05385k722o",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_sport/0fbd/live/6e7b9000-6926-11ef-8c32-f3c2bc7494c6.png",
      publishedAt: "2024-09-09T23:22:15.3999451Z",
      content:
        "Bookmakers, usually protected and in profit thanks to margins and finely-tuned odds, were losing on National League South.\r\nThey were seeing floods of money on certain teams' games from newly-opened … [+4027 chars]",
    },
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: "Tyler Dragon, Jordan Mendoza",
      title:
        "49ers vs. Jets Monday Night Football: Aaron Rodgers returns, Christian McCaffrey inactive",
      description:
        "In what could be a Super Bowl 59 preview, the New York Jets head west to face the San Francisco 49ers in the first MNF matchup of 2024.",
      url: "https://www.usatoday.com/story/sports/nfl/2024/09/09/49ers-jets-monday-night-football-score-updates/75084737007/",
      urlToImage:
        "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/09/09/USAT/75151107007-usatsi-21398051-1.jpg?crop=2993,1684,x2,y51&width=2993&height=1684&format=pjpg&auto=webp",
      publishedAt: "2024-09-09T22:37:36+00:00",
      content:
        "The season is just starting, but Monday night might offer a preview of February.\r\nAaron Rodgers and the New York Jets head west to take on Brock Purdy and the San Francisco 49ers in the first matchup… [+6538 chars]",
    },
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: "Jim Sergent",
      title:
        "Forget fantasy football, betting heats up on what Harris and Trump will say at debate",
      description:
        "Offshore gamblers bet millions on what words and phrases they expect Donald Trump and Kamala Harris will say during Tuesday's presidential debate.",
      url: "https://www.usatoday.com/story/graphics/2024/09/09/harris-trump-debate-betting-odds/75093590007/",
      urlToImage:
        "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/09/09/USAT/75149409007-trump-harriswords.png?crop=4395,2472,x943,y480&width=3200&height=1800&format=pjpg&auto=webp",
      publishedAt: "2024-09-09T21:45:14+00:00",
      content:
        'Get ready to hear the words "border," "abortion" and "inflation" when Vice President Kamala Harris and former President Donald Trump debate for the first time Tuesday in Philadelphia. At least, that\'… [+2465 chars]',
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Joe Flint",
      title:
        "Fight With Disney Risks ‘Monday Night Football’ for DirecTV Subscribers",
      description:
        "Two sides remain far apart in channel-carriage negotiations, with holdups over fee increases and distribution guarantees",
      url: "https://www.wsj.com/business/media/directv-subscribers-might-miss-monday-night-football-as-fight-with-disney-drags-on-0450a680?mod=hp_lead_pos10",
      urlToImage: "https://images.wsj.net/im-14515800/social",
      publishedAt: "2024-09-09T20:31:00Z",
      content:
        "More than 11 million DirecTV subscribers are likely to miss out on ESPNs telecast of the seasons first Monday Night Football game as a contract dispute between the satellite broadcaster and DisneyDIS… [+494 chars]",
    },
    {
      source: {
        id: "fox-sports",
        name: "Fox Sports",
      },
      author: "David Helman",
      title:
        "National Football League\n        Five potential Cowboys picks to track at the NFL Draft Combine\n       \n      1 hour ago",
      description:
        "The draft cycle is now fully in swing, signified by this year's top talent meeting with teams and working out in Indianapolis.",
      url: "https://www.foxsports.com/stories/nfl/five-potential-cowboys-picks-to-track-at-the-nfl-draft-combine",
      urlToImage:
        "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2024/02/647/364/amarius-mims-georgia.jpg?ve=1&tl=1",
      publishedAt: "2024-02-29T18:37:22.5746516Z",
      content:
        "March mock drafts feel a bit like looking at the dessert menu before you've ordered the main course. But looking at the dessert menu is fun.",
    },
    {
      source: {
        id: "bleacher-report",
        name: "Bleacher Report",
      },
      author: "David Kenyon",
      title: "Unique Stats from the 2023 College Football Regular Season",
      description:
        "Numbers are an integral part of college football. Whether you're previewing games, ranking teams or picking an award winner, statistics help shape the story.…",
      url: "https://bleacherreport.com/articles/10100739-unique-stats-from-the-2023-college-football-regular-season",
      urlToImage:
        "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1702319871/sdx1wjlqkcqz3anqfabp.jpg",
      publishedAt: "2023-12-12T12:00:00Z",
      content:
        "Zach Bolinger/Icon Sportswire via Getty Images\r\nSpeaking of Iowa...\r\nWhat makes the Hawkeyes' stellar defensive season even more impressive is how much the team desperately needed it.\r\nAmong the many… [+711 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: "Hermant Brar",
      title:
        "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
      description:
        "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
      urlToImage:
        "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
      publishedAt: "2020-04-27T07:20:43Z",
      content:
        "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <>
        <div className="container my-3">
          <h1>welcome to the newsmonkey app</h1>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title.slice(0, 45)}
                    description={element.description.slice(0, 88)}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default News;

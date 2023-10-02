const { Slug } = require("../../controller/localControler")

const castRowgParamtoGameData = (param)=>{
  return param?.map((item)=>{
    return (
      item.store?{
        name:Slug(item?.store?.name),
        url:item?.store?.domain,
      }:
      item.metascore?{
        metascore:item?.metascore,
        url:item?.url,
        platformName:Slug(item?.platform?.name),
      }:
      Slug(item?.name)||
      Slug(item?.platform?.name)||
      0
    )
    }
  )
}

var a =castRowgParamtoGameData(
  [
    {
        "id": 4787,
        "url": "",
        "store": {
            "id": 3,
            "name": "PlayStation Store",
            "slug": "playstation-store",
            "domain": "store.playstation.com",
            "games_count": 7838,
            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
        }
    },
    {
        "id": 465944,
        "url": "",
        "store": {
            "id": 2,
            "name": "Xbox Store",
            "slug": "xbox-store",
            "domain": "microsoft.com",
            "games_count": 4770,
            "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
        }
    },
    {
        "id": 17290,
        "url": "",
        "store": {
            "id": 1,
            "name": "Steam",
            "slug": "steam",
            "domain": "store.steampowered.com",
            "games_count": 79207,
            "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
        }
    },
    {
        "id": 42864,
        "url": "",
        "store": {
            "id": 7,
            "name": "Xbox 360 Store",
            "slug": "xbox360",
            "domain": "marketplace.xbox.com",
            "games_count": 1912,
            "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
        }
    }
  ],
)
console.log(a);
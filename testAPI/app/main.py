from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/books")
def books():
  return {
   "books":[
      {
         "image":"http://books.google.com/books/content?id=FOxejwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
         "isbn":9784575518610,
         "title":"鵺の鳴く夜が明けるまで"
      },
      {
         "image":"http://books.google.com/books/content?id=A2a1jgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
         "isbn":9784803008258,
         "title":"人狼への転生、魔王の副官"
      },
      {
         "image":"http://books.google.com/books/content?id=1VbTwAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
         "isbn":9784896374599,
         "title":"転生したらスライムだった件"
      }
   ]
  }

@app.get("/id9784896374599")
def id():
  return {
   "novel":{
      "author":"伏瀬",
      "check":1,
      "description":"最弱モンスターが魔王になる!?",
      "image":"http://books.google.com/books/content?id=1VbTwAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      "isbn":9784896374599,
      "post_number":1,
      "publisher_date":"2014-05",
      "title":"転生したらスライムだった件"
   },
   "review":[
      {
         "comment":"なろう発の異世界転生物語の中で有名な作品で周りの評判も良く、実際に面白かった。主人公が最弱と言われているスライムに転生して、2つのユニークスキルを駆使して戦闘や町の発展をしていく物語。主人公がスライムっていう性別が存在しない種族だからか、他の異世界ものにありがちな恋愛要素っていうのはあまりなさそうだけど、サービスシーンと言われるようなのはあったりした。全体的に設定もちゃんとしていて、バランスの取れた作品だと感じた。",
         "id":1,
         "isbn":9784896374599,
         "post_time":"Thu, 21 Sep 2023 07:17:11 GMT",
         "review_type":"both",
         "spoiler_alert":0,
         "user_id":10
      }
   ]
}
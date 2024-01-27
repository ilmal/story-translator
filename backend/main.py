from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

from modules.import_stories import import_stories
from modules.translate_story import translate_story

stories = [
    [
        "https://americanliterature.com/childrens-stories/the-three-little-pigs",
        "The three little pigs"
    ],
    [
        "https://americanliterature.com/childrens-stories/little-red-riding-hood",
        "Little Red Riding Hood"
    ],
]

languages = [
    "zh-cn"
]

@app.route("/api/get_languages", methods=["GET"])
def get_languages():
    return languages

@app.route("/api/get_stories", methods=["GET"])
def get_stories():
    return stories

@app.route("/api/get_story_text", methods=["GET"])
def get_story_text():
    if not request.args.get('story', '') or not request.args.get('language', ''): 
        return "request was without story or language info", 400
        raise Exception("request did not have story or language info!")
    story = request.args.get('story', '')
    language = request.args.get('language', '')
    
    for e in stories:
        if str(story) == str(e[1]):
            (story, story_name) = import_stories(stories[0])
            story_lines = [e for e in story.split("\n") if not e == "" and not e == "\r"]

            if language not in languages: return "language provided is not supported", 400

            translation_arr = translate_story(story_lines, language)

            print(translation_arr)
            return translation_arr



    return "The story provided was not found on the server", 400

def main():
    (story, story_name) = import_stories(stories[0])

    story_lines = [e for e in story.split("\n") if not e == "" and not e == "\r"]

    translation_arr = translate_story(story_lines, "zh-cn")

    for e in translation_arr:
        print(e[0])
        print(e[1])
        print("\n\n")




# if __name__ == "__main__":
#     main()
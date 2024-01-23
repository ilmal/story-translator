from flask import Flask

from modules.import_stories import import_stories
from modules.translate_story import translate_story

def main():

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


    (story, story_name) = import_stories(stories[0])

    story_lines = [e for e in story.split("\n") if not e == "" and not e == "\r"]

    translation_arr = translate_story(story_lines, "zh-cn")

    for e in translation_arr:
        print(e[0])
        print(e[1])
        print("\n\n")




if __name__ == "__main__":
    main()
firstpara = document.getElementById("firstElement");

let tools = ["", "", ""];

firstpara.innerHTML =
  "Once upon a time, in a small village nestled at the edge of an enchanted forest, lived a young girl named Emma. She was known for her bravery and her insatiable curiosity. One day, Emma decided to venture into the enchanted forest to discover its secrets.";

let parent = document.getElementById("story");

function createStory(msg, object = parent) {
  object = document.createElement("P");
  object.appendChild(document.createTextNode(msg));
  document.body.appendChild(object);
}

async function startStory() {
  let choice = prompt(
    `As Emma walked deeper into the forest, she came across a mysterious path that split into two. She heard a soft whisper in the wind, "Choose wisely, for your destiny awaits."(Left or Right)`
  );
  let msg = "";
  if (choice == "Left" || choice == "left") {
    msg = "Emma encounters a talking fox who would offer to be her guide.";
    createStory(msg);
    choice = prompt(
      `Following the talking fox, Emma stumbled upon a clearing where she found a magical mirror that showed her two different versions of herself. (What does Emma say? Mirror or Continue)`
    );
    createStory(
      "Following the talking fox, Emma stumbled upon a clearing where she found a magical mirror that showed her two different versions of herself."
    );
    if (choice == "mirror") {
      createStory(
        "She would step into the mirror and find herself in an alternate world where everything was upside down."
      );
      msg =
        "In the alternate world, Emma met a wise old owl who presented her with two choices. (wisdom or return)";
      choice = prompt(msg);
      createStory(msg);
      if (choice == "wisdom") {
        createStory(
          "She would receive the gift of wisdom and knowledge, but lose her ability to speak."
        );
        msg =
          "With her newfound wisdom and knowledge, Emma was faced with a final choice. (share or keep)";
        choice = prompt(msg);
        createStory(msg);
        if (choice == "share") {
          createStory(
            "She would share her wisdom with the world and become a great teacher and leader."
          );
        } else if (choice == "keep") {
          createStory(
            "She would keep her wisdom to herself and live a quiet, peaceful life."
          );
        }
      } else if (choice == "return") {
        createStory(
          "She would go back to her own world, but lose all memory of her adventure in the enchanted forest."
        );
        msg =
          "With no memory of her adventure, Emma had to choose between two paths. (adventure or home)";
        choice = prompt(msg);
        createStory(msg);
        if (choice == "adventure") {
          createStory(
            "She would venture back into the enchanted forest and rediscover its secrets."
          );
        } else if (choice == "home") {
          createStory(
            "She would stay in the village and live a simple, content life."
          );
        }
      }
    } else if (choice == "continue") {
      createStory(
        "She would continue walking with the fox and eventually reach a beautiful, enchanted garden."
      );
      msg =
        "While walking through the enchanted garden, Emma stumbled upon a hidden door that led to two different paths. (waterfall or meadow)";
      choice = prompt(msg);
      createStory(msg);
      if (choice == "waterfall") {
        createStory(
          "She would follow the path that led to a magical waterfall that had the power to grant wishes."
        );
        msg =
          "After making a wish at the magical waterfall, Emma had to choose between two paths. (fulfill or sacrifice)";
        choice = prompt(msg);
        createStory(msg);
        if (choice == "fulfill") {
          createStory(
            "Her wish would come true, but at a great cost to herself."
          );
        } else if (choice == "sacrifice") {
          createStory(
            "She would sacrifice her wish to save someone else in need."
          );
        }
      } else if (choice == "meadow") {
        createStory(
          "She would follow the path that led to a peaceful meadow filled with talking animals."
        );
        msg =
          "After spending time with the talking animals, Emma had to choose between two paths. (speak or silence)";
        choice = prompt(msg);
        createStory(msg);
        if (choice == "speak") {
          createStory(
            "She would gain the ability to speak to animals, but lose her ability to speak to humans."
          );
        } else if (choice == "silence") {
          createStory(
            "She would lose her ability to speak to animals, but retain her ability to speak to humans."
          );
        }
      }
    }
  } else if (choice == "Right" || choice == "right") {
    msg =
      "Emma would take the path to the right and find an old, abandoned cottage with a hidden treasure inside.";
    createStory(msg);
    choice = prompt(
      "Inside the old cottage, Emma discovered a hidden door that led to two different rooms. (Which door does she enter? Gold or Exit)"
    );
    createStory(
      "Inside the old cottage, Emma discovered a hidden door that led to two different rooms."
    );

    if (choice == "gold") {
      createStory(
        "She would enter the room filled with gold coins and jewels, but risk being trapped inside forever."
      );
      msg =
        "While exploring the forest with the unicorn, Emma came across a crossroads with two different paths. (Mountain or River)";
      choice = prompt(msg);
      createStory(msg);
      if (choice == "mountain") {
        createStory(
          "She would climb a treacherous mountain and find a hidden cave filled with ancient artifacts."
        );
        msg =
          "After discovering the ancient artifacts, Emma had to choose between two paths. (preserve or use)";
        choice = prompt(msg);
        createStory(msg);
        if (choice == "preserve") {
          createStory(
            "She would preserve the artifacts and keep them safe for future generations."
          );
        } else if (choice == "use") {
          createStory(
            "She would use the artifacts for her own gain, but risk unleashing their power."
          );
        }
      } else if (choice == "river") {
        createStory(
          "She would follow the river and find a magical boat that could take her anywhere she wanted to go."
        );
        msg =
          "After traveling on the magical boat, Emma had to choose between two paths. (explore or return)";
        choice = prompt(msg);
        createStory(msg);
        if (choice == "explore") {
          createStory(
            "She would continue traveling and exploring new and unknown lands."
          );
        } else if (choice == "return") {
          createStory(
            "She would return to her village and share her stories with the villagers."
          );
        }
      }
    } else if (choice == "exit") {
      createStory(
        "She would leave the cottage and find a friendly unicorn who would offer to guide her through the forest."
      );
      msg =
        "Emma found herself back in her own world, but with a choice to make. (forget or remember)";
      choice = prompt(msg);
      createStory(msg);
      if (choice == "forget") {
        createStory(
          "She would forget everything that happened in the enchanted forest and continue with her life."
        );
      } else if (choice == "remember") {
        createStory(
          "She would remember her adventure, but be haunted by the memories of the enchanted forest forever."
        );
      }
    }
  }
}


import discord, selenium
import tokenik

# WEBSCRAPING
from bs4 import BeautifulSoup
import requests

from datetime import date
import calendar
from datetime import datetime
import random
# #matej tuesday check
# my_date = date.today()
# sent_already = False
# if calendar.day_name[my_date.weekday()] == 'Tuesday':
#     if sent_already == False:
#         sent_already = True
#         https: // tenor.com / view / gamingnation - gif - 20277615

list_kokotov = ["<@" + str(396715013257035796) + ">", "<@" + str(395568205168377858) + ">",  "<@" + str(577129731976331286) + ">",  "<@" + str(547138217460105220) + ">",  "<@" + str(573935385638469644) + ">",  "<@" + str(547138217460105220) + ">",  "<@" + str(380797533045129226) + ">", "<@" + str(335716832155795457) + ">"]


paragraf3 = "prečítaj si tretí paragraf kokot: §3 Najmladší a osoby ženského pohlavia nesmú mať za žiadnych okolností svoj osobný názor, to znamená, že sa musia prispôsobiť druhým"

client = discord.Client()



@client.event
async def on_ready():
    print("Bot is up and running as {0.user}".format(client))




mention_tadeas = "<@" + str(547138217460105220) + ">"
mention_erik = "<@" + str(395568205168377858) + ">"

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if mention_tadeas in message.content:
        await message.channel.send("https://tenor.com/view/kdejepavel-pavel-kde-je-gif-23676452")

    
    #help
    if message.content == "!":
        await message.channel.send("!winrate [meno]")
        await message.channel.send("!picker - random picker")
        #help


# picker
    if message.content.startswith("!picker"):
        await message.channel.send("vybraty bol:" + random.choice(list_kokotov))
# picker
    



            # ERIK BEDTIME # 

    if message.author == 395568205168377858: 
        now = datetime.now()
        current_time = now.strftime("%H")
        if current_time == "02":
            await message.channel.send("https://tenor.com/view/erik-bedtime-gif-21777301")

            # ERIK BEDTIME # 
















# WINRATE #
    if message.content.startswith("!winrate"):
        name = message.content[9:99]

        url = ("https://u.gg/lol/profile/eun1/" + name + "/overview").lower()
        result = requests.get(url)
        soup = BeautifulSoup(result.text, "html.parser")
        fidler = soup.find_all("div", class_="rank-wins")
        print(fidler[0].text)
        numbers = ""

        for i in fidler[0].text:
            if i.isdigit() == True:
                numbers += i

        winrate = int(numbers[0:2])
        games_played = int(numbers[2:99])

        await message.channel.send(name.capitalize() + " má " + str(winrate) + "%" + " winrate z " + str(games_played) + " hier")
        if winrate < 56:
            if "sac1000" in url:
                await message.channel.send("Slaby kokot")
                await message.channel.send("https://tenor.com/view/pavelmoment-gif-25551915")


            else:
                await message.channel.send("Slaby kokot")
        else:
            await message.channel.send("(•-•)( •-•) > ⌐■-■ (⌐■_■)")
            
        
            # WINRATE # 
    
























######### IBA ANDREAS #########
    if message.author.id == 573935385638469644: # ked je to andreas


        if "nesuhlasim" in message.content:
            await message.channel.send(paragraf3)

        elif "podla mna" in message.content:
            await message.channel.send(paragraf3)

        elif "suhlasim" in message.content:
            await message.channel.send(paragraf3)

        elif "nie" in message.content:
            await message.channel.send(paragraf3)

        elif "ano" in message.content:
            await message.channel.send(paragraf3)
        elif "jj" in message.content:
            await message.channel.send(paragraf3)
        elif "nn" in message.content:
            await message.channel.send(paragraf3)
        elif "j" in message.content:
            await message.channel.send(paragraf3)
        elif "n" in message.content:
            await message.channel.send(paragraf3)
            
    





######### IBA ANDREAS #########

client.run(tokenik.tokenik)




























# invite link = https://discord.com/api/oauth2/authorize?client_id=989482068461387796&permissions=8&scope=bot


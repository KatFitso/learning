import smtplib
from pornfolder import gmailPorn
import datetime as dt
import random

myEmail = "kypeckmail@gmail.com"

# now = dt.datetime.now()
# year = now.year
# month = now.month
# dayOfWeek = now.weekday()

# print(now, year, month, dayOfWeek)

# dateOfBirth = dt.datetime(year=1990, month=10, day=6)

# print(dateOfBirth)

now = dt.datetime.now()
weekday = now.weekday()

if(weekday == 0) :
  with open('./day32-smtp-datetime/quotes.txt') as quotes :
    allQuotes = quotes.readlines()
    quote = random.choice(allQuotes)
  
  print(quote)

  with smtplib.SMTP("smtp.gmail.com", port=587) as connection :
    connection.starttls()
    connection.login(user=myEmail, password=gmailPorn)

    connection.sendmail(
        from_addr=myEmail,
        to_addrs=myEmail,
        msg=f"Subject:Monday Motivation\n\n{quote}"
      )



import time
from selenium import webdriver 

#start_time = time.time()
def halt():
    driver = webdriver.Firefox()
    driver.get('https://www.nasdaqtrader.com/Trader.aspx?id=TradeHalts')
    table = driver.find_elements_by_xpath('/html/body/div[1]/div[2]/div/div[2]/div/div/table/tbody')

    update = []

    for tr in driver.find_elements_by_xpath('/html/body/div[1]/div[2]/div/div[2]/div/div/table/tbody/tr[2]'):
        tds = tr.find_elements_by_tag_name('td')
        for td in tds:
            update.append(td.text)
    

    driver.quit()
    return update
    
      
    #print("--- %s seconds ---" % (time.time() - start_time))

i = 2
var = []
market_close = time.time() + 60 * 60 * 6.5

while time.time() < market_close:
    var.extend(halt())
    #print (var)

    if i == 2:
    	print ('first iteration boi')

    elif var[i] == var[i-10]:
    	print ('same update bitch ass')
    
    i += 10

    time.sleep(60)

import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from datetime import datetime
import os 
from dotenv import load_dotenv
load_dotenv()

# Obter variáveis de ambiente
user = os.getenv("USER")
password = os.getenv("PASS")
web = os.getenv("WEB")
timer1 = os.getenv("TIMER1")
timer2 = os.getenv("TIMER2")
timer3 = os.getenv("TIMER3")
timer4 = os.getenv("TIMER4")

timers = {
    "timer1": timer1,
    "timer2": timer2,
    "timer3": timer3,
    "timer4": timer4
}

# Selecionar o temporizador não nulo
timerSelected = next((timer_value for timer_name, timer_value in timers.items() if timer_value), None)

def getTime():
    now = datetime.now().strftime("%H:%M")
    return now == timerSelected

# Inicializar o driver do navegador
driver = webdriver.Edge()

try:
    while True:
        if getTime():
            driver.execute_script("window.open('about:blank', '_blank');")
            driver.switch_to.window(driver.window_handles[-1])
            driver.get(web) 

            inputs = WebDriverWait(driver, 10).until(EC.visibility_of_all_elements_located((By.NAME, "email")))
            password_input = WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.NAME, "password")))
            
            # campos de entrada
            inputs[0].send_keys(user)
            password_input.send_keys(password)
            
            button = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//button[contains(text(), 'Acessar painel')]")))
            button.click()
                
            # marcar ponto
            button = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//div[contains(text(), 'Marcar Ponto')]")))
            button.click()

            time.sleep(5)
                
            break
        
        time.sleep(60)

finally:
    driver.quit()

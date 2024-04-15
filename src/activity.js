/**
 * Получает случайную активность из API и возвращает ее.
 * @async
 * @return {Promise<string>} Возвращает промис, который разрешается в строку, представляющую активность.
 * @throws {Error} Если происходит ошибка при получении данных из API, выводит ошибку в консоль и возвращает строку об ошибке.
 */
export async function getRandomActivity() {
    try {
        const response = await fetch('https://www.boredapi.com/api/activity/');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.activity;
    } catch (error) {
        console.error(error);
        return "Ошибка";
    }
}

/**
 * Обновляет текст активности на странице, получая новую активность из функции getRandomActivity.
 */
export async function updateActivity() {
    const activity = await getRandomActivity();
    document.getElementById('activity').textContent = activity;
}

/**
 * Начинает обновление активности каждую минуту.
 */
export function startUpdatingActivity() {
    updateActivity();
    setInterval(updateActivity, 60000);
}

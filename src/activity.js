/**
 * Запрашивает случайное занятие с помощью API и возвращает его.
 * @async
 * @return {Promise<string>} Промис, который разрешается в строку с описанием занятия.
 * @throws {Error} В случае ошибки при запросе к API, выводит ошибку в консоль и возвращает сообщение об ошибке.
 */
export async function getRandomActivity() {
    try {
        const apiResponse = await fetch('https://www.boredapi.com/api/activity/');
        if (!apiResponse.ok) {
            throw new Error("Не удалось получить данные. Попробуйте позже.");
        }
        const activityData = await apiResponse.json();
        return activityData.activity;
    } catch (error) {
        console.error(error);
        return "Ошибка при загрузке данных";
    }
}


/**
 * Обновляет текст активности на странице, получая новую активность из функции getRandomActivity.
 */
export async function updateActivity() {
    const activity = await getRandomActivity();
    document.getElementById("activity").textContent = activity;
}

/**
 * Начинает обновление активности каждую минуту.
 */
export function startUpdatingActivity() {
    updateActivity();
    setInterval(updateActivity, 60000);
}

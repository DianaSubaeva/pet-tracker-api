# Pet Tracker API

Полноценный REST API для приложения Pet Tracker.

## Endpoints

### Pets
- `GET /api/pets` - получить всех питомцев
- `GET /api/pets/:id` - получить питомца по ID
- `POST /api/pets` - создать нового питомца
- `PUT /api/pets/:id` - обновить питомца
- `DELETE /api/pets/:id` - удалить питомца

### Events
- `GET /api/events?petId=:petId` - получить события питомца
- `POST /api/events` - создать событие
- `PUT /api/events/:id` - обновить событие
- `DELETE /api/events/:id` - удалить событие

### Care Items
- `GET /api/careItems?petId=:petId` - получить записи ухода
- `POST /api/careItems` - создать запись ухода
- `PUT /api/careItems/:id` - обновить запись ухода
- `DELETE /api/careItems/:id` - удалить запись ухода

## Использование в коде

```javascript
// apiService.js
class ApiService {
    constructor() {
        this.baseUrl = 'https://pet-tracker-api.vercel.app/api';
    }
    
    async getPets() {
        const response = await fetch(`${this.baseUrl}/pets`);
        return response.json();
    }
    
    // ... другие методы
}

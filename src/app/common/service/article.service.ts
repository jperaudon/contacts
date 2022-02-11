import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../model/article';

@Injectable({
    providedIn: 'root'
})

export class ArticleService {
    private readonly API_URL = '/api'
    
    constructor(private http: HttpClient) { }

    public getArticles() {
        return this.http.get<Article[]>(`${this.API_URL}/articles`);
    }

    public getArtcile(id: number) {
        return this.http.get<Article>(`${this.API_URL}/article/${id}`);
    }

    public deleteArticle(id: number) { 
        return this.http.delete(`${this.API_URL}/article/delete/${id}`);
    }

    public addArtcile() {}
}

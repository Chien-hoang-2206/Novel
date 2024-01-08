import ApiOperation from './../../adapter/ApiOperation';
import ApiConstants from './../../adapter/ApiConstants';

const factories = {
    getNovelListHome: (payload) => {
        return ApiOperation.request({
            url: ApiConstants.HOME,
            method: 'GET',
        });
    },
    getReadingNovelList: (id) => {
        return ApiOperation.request({
            url: `${ApiConstants.READING_HISTORY_ACC}/${id}`,
            method: 'GET',
        });
    },
    getNovelInfo: (id) => {
        return ApiOperation.request({
            url: `${ApiConstants.HOME}/${id}`,
            method: 'GET',
        });
    },
    getstatusBookmark: (accId,id) => {
        return ApiOperation.request({
            url: `${ApiConstants.BOOKMARK}/${accId}/${id}`,
            method: 'GET',
        });
    },
    getNovelReviewInfo: (id) => {
        return ApiOperation.request({
            url: `${ApiConstants.REVIEW}/${id}`,
            method: 'GET',
        });
    },
    getNovelChapterInfo: (id) => {
        return ApiOperation.request({
            url: `${ApiConstants.CHAPTER_NOVEL}/${id}`,
            method: 'GET',
        });
    },
    saveReadingNovel: (saveReadingNovel) => {
        return ApiOperation.request({
            url: `${ApiConstants.HISTORY}`,
            method: 'POST',
            data: saveReadingNovel 
        });
    },
    addBookmark: (data) => {
        return ApiOperation.request({
            url: `${ApiConstants.BOOKMARK}`,
            method: 'POST',
            data: data
        });
    },
    deleteBookmark: (accId,id) => {
        return ApiOperation.request({
            url: `${ApiConstants.BOOKMARK}/${accId}/${id}`,
            method: 'DELETE',
        });
    },
    addChapter: data => {
        return ApiOperation.request({
            url: `${ApiConstants.CHAPTER_NOVEL}`,
            method: 'POST',
            data: data
        });
    },
    postSearchNovel: (searchName) => {
        return ApiOperation.request({
            url: `${ApiConstants.HOME}/search`,
            method: 'POST',
            data: searchName
        })
    }
}
export default factories;

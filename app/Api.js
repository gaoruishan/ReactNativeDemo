/**
 * Created by gaoruishan on 16/10/26.
 */

var URL = {
    search: 'https://api.github.com/search/repositories?q=',
    topic: 'https://cnodejs.org/api/v1/topics',
    topicDetail: 'https://cnodejs.org/api/v1/topic/'
}
class Api {

    static buildSearch(key) {
        if (key) {
            return (URL.search + key);
        } else {
            return (URL.search + 'facebook');
        }
    }

    static getTopic() {
        return (URL.topic);
    }

    static buildTopicDetail(key) {
        if (key) {
            return (URL.topicDetail + key);
        }
    }
}

export default Api;
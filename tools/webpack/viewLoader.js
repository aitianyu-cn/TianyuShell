/**@format */

module.exports = function (source) {
    // source 为 compiler 传递给 Loader 的一个文件的原内容
    // 处理...

    console.log(`processing: ${source}`);
    return Buffer.from('alert("fafafa");');
};

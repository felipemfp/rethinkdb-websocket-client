const Reader = function() {
  this.offset = 0;
  this.lastChunk = false;
  this.chunk = null;
  this.chunkLength = 0;
  this.headerSize = 8;
  this.lengthPadding = 0;
  this.header = null;
};

Reader.prototype.addChunk = function addChunk(chunk) {
  if (!this.chunk || this.offset === this.chunkLength) {
    this.chunk = chunk;
    this.chunkLength = chunk.length;
    this.offset = 0;
    return;
  }

  const newChunkLength = chunk.length;
  const newLength = this.chunkLength + newChunkLength;

  if (newLength > this.chunk.length) {
    let newBufferLength = this.chunk.length * 2;

    while (newLength >= newBufferLength) {
      newBufferLength *= 2;
    }

    const newBuffer = Buffer.alloc(newBufferLength);
    this.chunk.copy(newBuffer);
    this.chunk = newBuffer;
  }

  chunk.copy(this.chunk, this.chunkLength);
  this.chunkLength = newLength;
};

Reader.prototype.read = function read() {
  if (this.chunkLength < this.headerSize + 4 + this.offset) {
    return false;
  }

  // read length of next item
  const length = this.chunk.readInt32LE(this.offset + this.headerSize) + this.lengthPadding;

  // next item spans more chunks than we have
  const remaining = this.chunkLength - (this.offset + 4 + this.headerSize);
  if (length > remaining) {
    return false;
  }

  // this.offset += this.headerSize + 4;
  const result = this.chunk.slice(this.offset, this.offset + length + 4 + this.headerSize);
  this.offset += length + 12;
  return result;
};

export {Reader as default};

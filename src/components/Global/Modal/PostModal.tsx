import { useState } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

import { actionCreators, useAppDispatch, useAppSelector } from '../../../state';
import { bindActionCreators } from 'redux';

function PostModal(): JSX.Element {
  const [editorText, setEditorText] = useState<string>('');
  const [shareImage, setShareImage] = useState<File | null>(null);
  const [videoLink, setVideoLink] = useState<string>('');
  const [assetArea, setAssetArea] = useState<string>('');

  const handleImageChange = (files: FileList) => {
    const image = files[0];
    if (!image) return alert('Invalid image.');

    setShareImage(image);
  };

  const switchAssetArea = (area: string) => {
    setShareImage(null);
    setVideoLink('');
    setAssetArea(area);
  };

  const dispatch = useAppDispatch();
  const { toggleModal } = bindActionCreators(actionCreators, dispatch);
  const { user } = useAppSelector((state) => state.user);

  const resetAndCloseModal = () => {
    setEditorText('');
    setShareImage(null);
    setVideoLink('');
    setAssetArea('');
    toggleModal();
  };

  return (
    <Container>
      <Content>
        <Header>
          <h2>Create a post</h2>
          <button onClick={() => resetAndCloseModal()}>&times;</button>
        </Header>
        <SharedContent>
          <UserInfo>
            <img src={user?.photoURL ?? '/images/user.svg'} alt='user' />
            <span>{user?.displayName ?? 'User'}</span>
          </UserInfo>
          <Editor>
            <textarea
              value={editorText}
              onChange={(e) => setEditorText(e.target.value)}
              placeholder='What do you want to talk about?'
              autoFocus={true}
            />
          </Editor>
          {assetArea === 'image' ? (
            <UploadImage>
              <input
                type='file'
                accept='image/gif, image/jpeg, image/png'
                name='image'
                id='file'
                onChange={(e) => handleImageChange(e.target.files as FileList)}
              />
              <p>
                <label htmlFor='file'>Select an image to share</label>
              </p>
              {shareImage && <img src={URL.createObjectURL(shareImage)} />}
            </UploadImage>
          ) : assetArea === 'video' ? (
            <UploadVideoLink>
              <input
                type='text'
                placeholder='Please insert a video link'
                value={videoLink}
                onChange={(e) => setVideoLink(e.target.value)}
              />
              {videoLink && <ReactPlayer width={'100%'} url={videoLink} />}
            </UploadVideoLink>
          ) : (
            <></>
          )}
        </SharedContent>
        <ShareCreation>
          <AttachMedia>
            <AssetButton onClick={() => switchAssetArea('image')}>
              <img src='/images/modal-share-image.svg' alt='share image' />
            </AssetButton>
            <AssetButton onClick={() => switchAssetArea('video')}>
              <img src='/images/modal-share-video.svg' alt='share video' />
            </AssetButton>
          </AttachMedia>
          <ShareComment>
            <AssetButton>
              <img src='/images/modal-share-comment.svg' alt='share comment' />
              <span>Anyone</span>
            </AssetButton>
          </ShareComment>
          <PostButton disabled={!editorText}>Post</PostButton>
        </ShareCreation>
      </Content>
    </Container>
  );
}

export default PostModal;

const Container = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  color: #000;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.3s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const Content = styled.div`
  width: 100%;
  max-width: 35rem;
  background-color: #fff;
  max-height: 90%;
  overflow: initial;
  border-radius: 0.625rem;
  display: flex;
  flex-direction: column;
  top: 2rem;
  margin: 0 auto;
  position: relative;
`;

const Header = styled.div`
  display: block;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 1rem;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    cursor: pointer;
    height: 2.5rem;
    width: 2.5rem;
    min-width: auto;
    color: rgba(0, 0, 0, 0.8);
    font-size: 2rem;
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 0.5rem 0.75rem;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;

  svg,
  img {
    width: 3rem;
    height: 3rem;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }
  span {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5;
    margin-left: 0.625rem;
  }
`;

const Editor = styled.div`
  padding: 0.75rem 1.5rem;
  textarea {
    width: 100%;
    min-height: 6.25rem;
    resize: none;
  }

  input {
    width: 100%;
    height: 2.25rem;
    font-size: 1rem;
    margin-bottom: 1.25rem;
  }
`;

const UploadImage = styled.div`
  padding: 0.75rem 1.5rem;
  text-align: center;

  img {
    width: 100%;
  }

  input {
    display: none;
  }
`;

const UploadVideoLink = styled.div`
  padding: 0.75rem 1.5rem;
  text-align: center;
`;

const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1.5rem 0.75rem 1rem;
`;

const AssetButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 2.5rem;
  min-width: auto;
`;

const AttachMedia = styled.div`
  display: flex;
  align-items: center;
  padding-right: 0.5rem;

  ${AssetButton} {
    width: 2.5rem;
  }
`;

const ShareComment = styled.div`
  padding-left: 0.5rem;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);

  ${AssetButton} {
    span {
      margin-left: 0.625rem;
      font-size: 0.85rem;
    }
  }
`;

const PostButton = styled.button`
  cursor: pointer;
  min-width: 3.75rem;
  border-radius: 1.25rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #0a66c2;
  color: white;

  &:hover {
    background-color: #004182;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

/*:
 * @target MV
 * @plugindesc This plugin allows you to show up the animation face in the messsage window <RS_FaceAnimation>
 * @author Otávio/SpliterG
 *
 * @param Set Animation Face
 * @type struct<AnimationFace>[]
 * @desc Set the option data for animated face
 * @default ["{\"id\":\"blink\",\"x\":\"0\",\"y\":\"0\",\"width\":\"144\",\"height\":\"144\",\"cols\":\"4\",\"maxFrames\":\"3\",\"delay\":\"5.00\",\"looping\":\"true\"}"]
 *
 * @help
 * ================================================================
 * Preparing for face data
 * ================================================================
 * Nesta seção, você aprenderá como definir dados de rosto animado personalizados.
 *
 * Você pode mostrar muitas emoções, como ficar ocioso, correr, triste, piscar,
 * Morrer e assim por diante.
 *
 * No parâmetro do plugin chamado 'Set Animation Face',
 * Você precisa definir novos dados faciais personalizados para seus próprios fins.
 *
 * **valor de identificação:
 * Quando a janela de mensagem indica um rosto, ela deve detectar se o rosto
 * é um tipo animado, portanto precisa de um valor específico.
 * é o valor ID da face animada.
 *
 * Você pode definir o valor do ID para o tipo de string, como inativo, piscar, morrer.
 *
 * ** valores de x e y:
 * Em seguida, você precisa definir as coordenadas internas xey.
 * Normalmente é usado 0 em ambos os valores.
 *
 * ** valores de largura e altura:
 * Os valores de largura e altura são a largura e altura reais do quadro da imagem do rosto.
 * significa os valores de largura e altura do primeiro quadro na planilha sprite.
 * Normalmente, eles são definidos como 144 px em ambos.
 *
 * ** valor das colunas:
 * Em seguida, você deve definir o valor cols nas planilhas sprite.
 * Por exemplo, se houver quatro colunas e duas linhas na planilha sprite.
 * O número de quadros será 8 e o valor das colunas será 4.
 *
 * ** valor maxFrames:
 * se você definir maxFrames em dados personalizados, poderá limitar um quadro máximo
 *menos que os quadros originais.
 *
 * ** valor do atraso:
 * O tempo de atraso é o tempo decorrido desde o quadro anterior.
 * 1,0 será em torno de 0,016s
 * Por exemplo, 5,0 será em torno de 0,08s (0,016s * 5,0 = 0,08s)
 *
 * **valor do loop:
 * se você definir o valor do loop como verdadeiro, a face animada nunca irá parar.
 * é reproduzido para sempre até que a mensagem seja encerrada.
 *
 * ================================================================
 * Plugin Commands
 * ================================================================
 ** Este plugin fornece uma funcionalidade de alternância para rostos animados.
 * se você usar este comando do plugin, poderá aparecer um rosto animado na janela de mensagem.
 *
 *MostrarAnimaçãoFace
 *
 * Você deseja ocultar o rosto animado após ele ser indicado na tela.
 * ele é retornado como uma face normal se você usar este comando do plugin.
 *
 * EsconderAnimaçãoFace
 *
 * Este plugin irá verificar o valor do ID do rosto ativado
 * e mostre-o quando a próxima mensagem for aberta.
 * Portanto, você precisa definir o ID do rosto animado antes que a janela da mensagem seja configurada.
 * já estará configurado no parâmetro do plugin chamado 'Set Animation Face'
 * O valor do ID deve ser alterado conforme sua finalidade.
 *
 * DefinirAnimationFace ID
 *
 * Por exemplo, existe o ID facial chamado 'piscar' nele
 * e você pode usar assim antes que a janela de mensagem seja iniciada, como segue.
 *
 *MostrarAnimaçãoFace
 * SetAnimationFace pisca
 *
 * Em seguida, você precisa selecionar a imagem do rosto no comando do evento chamado ‘Mostrar Mensagem’
 * então, o sistema de rosto animado adiciona todos os quadros para aquela imagem
 *
 * Nesta parte, você aprenderá como alterar a escala, rotação e posição do desenho animado.
 * Sprites de rosto.
 *
 * Uma vez alterado, todos os rostos serão afetados desde a alteração.
 * Observe que todos os parâmetros precisam ser escritos em letras minúsculas.
 *
 * Por exemplo, se você quiser girar a face animada em 60 graus,
 *Você deve fazer assim.
 * Você passou o ângulo 60,0 para o comando do plugin chamado 'ChangeParamAnimationFace'
 *
 * ChangeParamAnimationFace ângulo 60,0
 *
 * na janela de mensagem, a posição da imagem do rosto animado é basicamente a
 * coordenadas relativas à janela de mensagem pai.
 * Portanto, suas coordenadas são (0, 0) px.
 *
 * ChangeParamAnimationFace x 0,0
 * ChangeParamAnimationFace e 0,0
 *
 * e você também pode aplicar o valor de preenchimento nele, assim.
 *
 * ChangeParamAnimationFace x 18,0
 * ChangeParamAnimationFace e 18.0
 *
 * Nesta parte, você aprenderá como alterar a escala do sprite do rosto animado.
 *
 * Para dimensionar a face animada, você passou escala para o comando do plugin ChangeParamAnimationFace,
 * assim.
 *
 * Escala ChangeParamAnimationFace 1.0
 *
 * 1,0 é a escala padrão e 2,0 é para aumentar o zoom duas vezes.
 *
 * ================================================================
 * Change Log
 * ================================================================
 * 16/07/2019 (v1.0.0) - Primeira versão.
 * 17/07/2019 (v1.0.1):
 * - Corrigido o problema que mostrava o quadro incorreto na planilha de sprites.
 * 2023.08.12 (v1.0.2):
 * - Corrigido o problema que não é definido o ID do estado ativo.
 */
/*~struct~AnimationFace:
 *
 *@param id
 * @desc Especifique o ID do rosto animado.
 * @padrão 0
 *
 * @paramx
 * @tipo número
 * @desc Define a coordenada x interna na planilha sprite.
 * @padrão 0
 *
 * @param y
 * @tipo número
 * @desc Defina a coordenada y interna na planilha sprite.
 * @padrão 0
 *
 * @param largura
 * @tipo número
 * @desc Defina a largura do quadro na planilha sprite.
 * @padrão 144
 *
 * @param altura
 * @tipo número
 * @desc Defina a altura do quadro na planilha sprite.
 * @padrão 144
 *
 * @param colunas
 * @tipo número
 * @desc Defina o valor de cols nas planilhas de sprites.
 * @padrão 4
 *
 * @param maxFrames
 * @tipo número
 * @desc Define o máximo de frames. Você pode querer limitar um quadro máximo menor do que os quadros originais.
 * @padrão 3
 *
 * @param atraso
 * @tipo número
 * @desc Uma vez iniciada a animação, cada quadro levará um tempo de atraso.
 * @padrão 5,00
 * @decimais 2
 *
 * @param looping
 * @type booleano
 * @desc se você definir o valor do loop como verdadeiro, a face animada nunca irá parar.
 * @default falso
 * @on verdadeiro
 * @off falso
 *
 */
/*:ko
 * @target MV
 * @plugindesc Este plugin permite que você mostre a face da animação na janela de mensagens <RS_FaceAnimation>
 * @autor biud436
 *
 * @param Definir rosto de animação
 * @type struct<AnimationFace>[]
 *@desc Animação Face | Você pode definir dados detalhados para arquivos.
 * @default ["{\"id\":\"blink\",\"x\":\"0\",\"y\":\"0\",\"largura\":\" 144\",\"altura\":\"144\",\"cols\":\"4\",\"maxFrames\":\"3\",\"atraso\":\"5.00\ ",\"looping\":\"true\"}"]
 *
 * @ajuda
 * ================================================================
 * Como usar
 * ================================================================
 *
 * Para alternar entre imagens de rosto animadas e normais, você precisa usar o seguinte comando do plugin:
 *
 * ShowAnimationFace
 *
 * Ele é alternado por padrão, portanto, chamar o comando do plug-in a seguir desenhará uma imagem de rosto normal.
 *
 * HideAnimationFace
 *
 * As informações de configuração da imagem do rosto animado são: Set Animation Face definido em parâmetros.
 * AnimationFace tem um valor de ID.
 * ID é um valor de identificação de dados que existe para adquirir dados rapidamente e é denominado ID.
 * Este valor pode ser uma string ou um valor numérico, etc..
 *
 * SetAnimationFace Id
 *
 * Por exemplo, suponha que você criou dados JSON correspondentes a um valor de Id char no parâmetro.
 * Neste caso, você deve usar o seguinte comando do plugin antes de chamar o display da instrução.
 *
 * ShowAnimationFace
 * SetAnimationFace char
 *
 *Na exibição da frase, você precisa encontrar e selecionar a imagem do rosto correspondente.
 * Porque corta e enquadra a imagem do rosto para caber nas informações opcionais.
 *
 * Se quiser usar a imagem normal do rosto novamente, você precisa chamar o seguinte comando do plugin.
 *
 * HideAnimationFace
 *
 * Chamar o comando acima o trará de volta ao estado padrão.
 *
 * As funções de rotação, mudança de posição e mudança de escala serão explicadas.
 * Este recurso é global e deve ser usado com muito cuidado.
 * Todos os argumentos devem ser escritos em letras minúsculas.
 *
 * Por exemplo, se você quiser girar um sprite 60 graus, você faria:
 *
 * ChangeParamAnimationFace angle 60.0
 *
 * O posicionamento de imagens de rostos animados na janela de mensagem é por padrão
 * Determinado pelas coordenadas relativas da janela de mensagem.
 * Portanto, as coordenadas superiores são 0, 0.
 *
 * ChangeParamAnimationFace x 0,0
 * ChangeParamAnimationFace e 0,0
 *
 * O tamanho da imagem animada do rosto pode ser ajustado passando o fator de escala.
 * 1,0 é a escala padrão, 2,0 é ampliação dupla.
 *
 * Escala ChangeParamAnimationFace 1.0
 *
 * Novamente, como os argumentos acima se aplicam a globais,
 * Use com cuidado, pois se aplica a todas as animações faciais exibidas posteriormente.
 *
 * ================================================================
 * Change Log
 * ================================================================
 * 2019.07.16 (v1.0.0) - First Release.
 * 2019.07.17 (v1.0.1) :
 * - Fixed the issue that shows up the incorrect frame in the sprite sheet.
 */
/*~struct~AnimationFace:ko
 *
 * @param id
 * @desc Obtenha rapidamente o estado percorrendo a tabela hash por esse valor de ID.
 * @default 0
 *
 * @param x
 * @type number
 * @desc Não são coordenadas na tela, mas pontos iniciais na planilha de sprites.
 * @default 0
 *
 * @param y
 * @type number
 * @desc Não são coordenadas na tela, mas pontos iniciais na planilha de sprites.
 * @default 0
 *
 * @param width
 * @type number
 * @desc O comprimento vertical do quadro a ser exibido na tela.
 * @default 144
 *
 * @param height
 * @type number
 * @desc O comprimento vertical do quadro a ser exibido na tela.
 * @default 144
 *
 * @param cols
 * @type number
 * @desc numero de colunas. Para animar, você só precisa cortar um quadro da folha sprite.
 * @default 4
 *
 * @param maxFrames
 * @type number
 * @desc É o quadro maximo. Por padrão, o estado da animação é superior a 2 quadros.
 * @default 3
 *
 * @param delay
 * @type number
 * @desc Quando um quadro termina, é natural definir um certo atraso.
 * @default 5.00
 * @decimals 2
 *
 * @param looping
 * @type boolean
 * @desc Opção para repetir a reprodução. Às vezes, ele precisa ser reproduzido repetidamente após terminar a reprodução.
 * @default false
 * @on true
 * @off false
 *
 */

RS = window.RS || {};
RS.FaceAnimation = RS.FaceAnimation || {};

(function () {
    'use strict';

    let parameters = $plugins.filter(function (i) {
        return i.description.contains('<RS_FaceAnimation>');
    });

    parameters = parameters.length > 0 && parameters[0].parameters;

    RS.FaceAnimation.jsonParse = function (str) {
        const retData = JSON.parse(str, (k, v) => {
            try {
                return RS.FaceAnimation.jsonParse(v);
            } catch (e) {
                return v;
            }
        });

        return retData;
    };

    RS.FaceAnimation.Params = {};

    RS.FaceAnimation.Params.isAnimationFace = true;

    RS.FaceAnimation.Params.data = RS.FaceAnimation.jsonParse(
        parameters['Set Animation Face']
    );
    RS.FaceAnimation.Params.states = {};

    // Crie uma tabela hash de valores de ID para promover uma pesquisa rápida.
    RS.FaceAnimation.Params.data.forEach(function (e) {
        RS.FaceAnimation.Params.states[e.id] = e;
    });

    // ID do estado ativo (mais de 2 estados não podem ser atribuídos)
    RS.FaceAnimation.Params.activeStateId = '';

    RS.FaceAnimation.Params.defaultState = {
        x: 0,
        y: 0,
        width: 1,
        height: 1,
        cols: 1,
        startFrame: 0,
        maxFrames: 1,
        delay: 5.0,
        looping: false,
    };

    // estado global
    RS.FaceAnimation.Params.globalStates = {
        x: 0,
        y: 0,
        angle: 0.0,
        scale: 1.0,
    };

    // ===============================================================
    // SpriteData
    // ===============================================================

    class SpriteData {
        constructor() {
            this._offsetX = 0.0;
            this._offsetY = 0.0;
            this._width = 4;
            this._height = 4;
            this._scale = 1.0;
            this._rotation = 0.0;
            this._frameDelay = 0.0;
            this._startFrame = 0;
            this._endFrame = 1;
            this._rect = new PIXI.Rectangle(0, 0, 4, 4);
            this._position = new PIXI.Point(0, 0);
            this._opacity = 255;
        }
    }

    // ===============================================================
    // FaceSprite
    // ===============================================================

    /**
     *
     * @class RS.FaceSprite
     * @example
     *
     * const bitmap = ImageManager.loadCharacter("011-Lancer03");
     * let sprite = new RS.FaceSprite(bitmap, 0, 0, 32, 48, 4);
     * sprite
     *  .setPosition(10, 50)
     *  .setAngle(10.0)
     *  .setScale(4.0)
     *  .setLoop(true)
     *  .setFrameDelay(0.5)
     *  .setSpriteSheets(4, 4);
     *
     * SceneManager._scene.addChild(sprite);
     *
     */

    class FaceSprite extends Sprite {
        constructor(bitmap, x, y, width, height, maxFrames, cols) {
            super();

            this._spriteData = new SpriteData();
            this._spriteData._position.x = x;
            this._spriteData._position.y = y;
            this._spriteData._width = width;
            this._spriteData._height = height;

            if (maxFrames === 0) {
                maxFrames = 1;
            }

            this._maxFrames = maxFrames;

            this.setFrames(0, this._maxFrames);
            this.setCurrentFrame(0);

            this._spriteData._frameDelay = 0.0;

            this._animationTime = 0.0;
            this._isAnimationCompleted = false;

            if (!cols) {
                cols = 1;
            }

            if (cols < 0) {
                cols = 1;
            }

            this._cols = cols;

            this.visible = false;
            this._visible = false;

            this.bitmap = bitmap;

            this._last = performance.now();

            this._isReady = true;
        }

        update() {
            super.update();

            if (!this._isReady) {
                return;
            }

            const startFrame = this._spriteData._startFrame;
            const endFrame = this._spriteData._endFrame;
            const delay = this._spriteData._frameDelay;

            const now = performance.now();

            const elapsed = (now - this._last) / 16.666666666666;

            if (endFrame - startFrame > 0) {
                this._animationTime += elapsed;

                if (this._animationTime > delay) {
                    this._animationTime -= delay;
                    this._currentFrame++;

                    if (
                        this._currentFrame < startFrame ||
                        this._currentFrame > endFrame
                    ) {
                        if (this._isLooping) {
                            this._currentFrame = startFrame;
                        } else {
                            this._currentFrame = endFrame;
                            this._isAnimationCompleted = true;
                        }
                    }
                    this.setRect();
                }
            }

            this.updateInternalProperties();

            this._last = now;
        }

        updateInternalProperties() {
            this.opacity = this._spriteData._opacity;
            this.visible = this._visible;

            const rect = this._spriteData._rect;
            if (rect) {
                this.setFrame(rect.x, rect.y, rect.width, rect.height);
            }

            this.x = this._spriteData._position.x;
            this.y = this._spriteData._position.y;

            const scale = this._spriteData._scale;

            if (!this.scale) {
                this.scale = new Point(scale, scale);
            } else {
                this.scale.x = scale;
                this.scale.y = scale;
            }

            const rotation = this._spriteData._rotation;

            this.rotation = rotation;
        }

        getX() {
            return this._spriteData._position.x;
        }

        getY() {
            return this._spriteData._position.y;
        }

        getWidth() {
            return this._spriteData._width;
        }

        getHeight() {
            return this._spriteData._height;
        }

        getAngle() {
            return (180.0 / Math.PI) * this._spriteData._rotation;
        }

        getRadians() {
            return this._spriteData._rotation;
        }

        getStartFrame() {
            return this._spriteData._startFrame;
        }

        getEndFrame() {
            return this._spriteData._endFrame;
        }

        getRect() {
            return this._spriteData._rect;
        }

        getAnimCompleted() {
            return this._isAnimationCompleted;
        }

        setX(x) {
            this._spriteData._position.x = x;
            return this;
        }

        setY(y) {
            this._spriteData._position.y = y;
            return this;
        }

        setScale(scale) {
            this._spriteData._scale = scale;

            return this;
        }

        setAngle(degree) {
            this._spriteData._rotation = (Math.PI / 180.0) * degree;

            return this;
        }

        setRadians(rad) {
            this._spriteData._rotation = rad;

            return this;
        }

        setVisible(visible) {
            this._visible = visible;

            return this;
        }

        setSpriteSheets(cols) {
            if (cols < 0) {
                cols = 1;
            }

            this._cols = cols;

            return this;
        }

        setOpacity(opacity) {
            if (opacity < 0) {
                opacity = 0;
            }

            if (opacity > 255) {
                opacity = 255;
            }

            this._spriteData._opacity = opacity;

            return this;
        }

        setFrameDelay(delay) {
            this._spriteData._frameDelay = delay;
            return this;
        }

        setPosition(x, y) {
            this.setX(x).setY(y);

            return this;
        }

        setFrames(startNum, endNum) {
            this._spriteData._startFrame = startNum;

            if (endNum < 0) {
                endNum = 1;
            }

            if (endNum > this._maxFrames) {
                endNum = this._maxFrames;
            }

            this._spriteData._endFrame = endNum - 1;

            return this;
        }

        setCurrentFrame(currentFrame) {
            if (currentFrame >= 0) {
                this._currentFrame = currentFrame;
                this._isAnimationCompleted = false;
                this._animationTime = 0.0;
                this.setRect();
            }

            return this;
        }

        setRect(...args) {
            const n = args.length;
            switch (n) {
                case 1:
                    {
                        const rect = args[0];
                        this._spriteData._rect = rect;
                    }
                    break;
                case 4:
                    {
                        const { x, y, width, height } = args;
                        this._spriteData._rect = new PIXI.Rectangle(
                            x,
                            y,
                            width,
                            height
                        );
                    }
                    break;
                default:
                    this._spriteData._rect.x =
                        (this._currentFrame % this._cols) *
                        this._spriteData._width;
                    this._spriteData._rect.width = this._spriteData._width;
                    this._spriteData._rect.y =
                        Math.floor(this._currentFrame / this._cols) *
                        this._spriteData._height;
                    this._spriteData._rect.height = this._spriteData._height;
                    break;
            }

            return this;
        }

        setLoop(isLooping) {
            this._isLooping = isLooping;

            return this;
        }

        setAnimComplete(isComplete) {
            this._isAnimationCompleted = isComplete;

            return this;
        }
    }

    RS.FaceSprite = FaceSprite;

    // ===============================================================
    // Window_Message
    // ===============================================================

    Window_Message.prototype.isAnimationFace = function () {
        if (this._faceSprite) return false;
        if (!RS.FaceAnimation.Params.isAnimationFace) return false;
        return true;
    };

    const alias_Window_Message_drawMessageFace =
        Window_Message.prototype.drawMessageFace;
    // eslint-disable-next-line consistent-return
    Window_Message.prototype.drawMessageFace = function () {
        if (this.isAnimationFace()) {
            const state =
                RS.FaceAnimation.Params.states[
                    RS.FaceAnimation.Params.activeStateId
                ];
            if (!state) {
                return alias_Window_Message_drawMessageFace.call(this);
            }

            const x = Number(state.x);
            const y = Number(state.y);
            const width = Number(state.width);
            const height = Number(state.height);
            const cols = Number(state.cols);
            const maxFrames = Number(state.maxFrames);
            const delay = Number(state.delay);
            const { looping } = state;

            this._faceSprite = new RS.FaceSprite(
                this._faceBitmap,
                x,
                y,
                width,
                height,
                maxFrames,
                cols
            );
            this._faceSprite
                .setPosition(
                    RS.FaceAnimation.Params.globalStates.x,
                    RS.FaceAnimation.Params.globalStates.y
                )
                .setAngle(RS.FaceAnimation.Params.globalStates.angle)
                .setScale(RS.FaceAnimation.Params.globalStates.scale)
                .setLoop(looping)
                .setFrameDelay(delay)
                .setSpriteSheets(cols)
                .setFrames(0, maxFrames)
                .setVisible(true);

            this.addChild(this._faceSprite);
            ImageManager.releaseReservation(this._imageReservationId);
        } else {
            alias_Window_Message_drawMessageFace.call(this);
        }
    };

    const alias_Window_Message_terminateMessage =
        Window_Message.prototype.terminateMessage;
    Window_Message.prototype.terminateMessage = function () {
        alias_Window_Message_terminateMessage.call(this);
        if (this._faceSprite) {
            this.removeChild(this._faceSprite);
            this._faceSprite = null;
        }
    };

    const alias_Game_Interpreter_pluginCommand =
        Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        alias_Game_Interpreter_pluginCommand.call(this, command, args);

        switch (command) {
            case 'ShowAnimationFace':
                RS.FaceAnimation.Params.isAnimationFace = true;
                break;
            case 'HideAnimationFace':
                RS.FaceAnimation.Params.isAnimationFace = false;
                break;
            case 'SetAnimationFace':
                RS.FaceAnimation.Params.activeStateId = args.join(' ');
                break;
            case 'ChangeParamAnimationFace':
                RS.FaceAnimation.Params.globalStates[args[0]] = Number(args[1]);
                break;
            default:
                break;
        }
    };
})();